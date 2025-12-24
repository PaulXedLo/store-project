using Microsoft.EntityFrameworkCore;
using DreamStore.API;

var builder = WebApplication.CreateBuilder(args);

var connectionString = Environment.GetEnvironmentVariable("DATABASE_URL") 
                       ?? builder.Configuration.GetConnectionString("DefaultConnection");

// setting up the database
builder.Services.AddDbContext<StoreDb>(options =>
    options.UseNpgsql(connectionString));

// enabling CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy => 
        policy.WithOrigins("http://localhost:3000", "https://store-project-kappa.vercel.app") 
              .AllowAnyMethod() 
              .AllowAnyHeader());
});

// Adding Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configuring Pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowReact");
app.UseHttpsRedirection();

//API ENDPOINTS PRODUCT

// GET 
app.MapGet("/api/products", async (StoreDb db) => 
    await db.Products.ToListAsync());

// POST 
app.MapPost("/api/products", async (StoreDb db, Product product) =>
{
    db.Products.Add(product);
    await db.SaveChangesAsync();
    return Results.Created($"/api/products/{product.Id}", product);
});

// DELETE 
app.MapDelete("/api/products/{id}", async (StoreDb db, int id) =>
{
    var product = await db.Products.FindAsync(id);
    if (product is null) return Results.NotFound();

    db.Products.Remove(product);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

// API ENDPOINTS SHOPPING CART
//GET
app.MapGet("/api/cart", async (StoreDb db) =>
{
    var cartItems = await db.CartItems
        .Join(db.Products,
            cart => cart.ProductId,
            prod => prod.Id,
            (cart, prod) => new 
            {
                Id = cart.Id,          
                ProductId = prod.Id,   
                Title = prod.Title,      
                Price = prod.Price,    
                Image = prod.Image,    
                Quantity = cart.Quantity,
                TotalPrice = prod.Price * cart.Quantity
            })
        .ToListAsync();

    return Results.Ok(cartItems);
});

// POST
app.MapPost("/api/cart", async (StoreDb db, CartItem item) =>
{
    // checking if product is in cart
    var existingItem = await db.CartItems
        .FirstOrDefaultAsync(c => c.ProductId == item.ProductId);

    if (existingItem != null)
    {
        // if it is, add 1
        existingItem.Quantity += item.Quantity;
    }
    else
    {
        // if not, add a new one
        db.CartItems.Add(item);
    }

    await db.SaveChangesAsync();
    return Results.Ok();
});

//  DELETE
app.MapDelete("/api/cart/{id}", async (StoreDb db, int id) =>
{
    var item = await db.CartItems.FindAsync(id);
    if (item is null) return Results.NotFound();

    db.CartItems.Remove(item);
    await db.SaveChangesAsync();
    return Results.Ok();
});

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<StoreDb>();
    db.Database.EnsureCreated();
}

// Running app
app.Run();

class StoreDb : DbContext
{
    public StoreDb(DbContextOptions<StoreDb> options) : base(options) { }
    public DbSet<Product> Products => Set<Product>();
    public DbSet<CartItem> CartItems => Set<CartItem>();
}
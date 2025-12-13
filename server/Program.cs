using Microsoft.EntityFrameworkCore;
using DreamStore.API;

var builder = WebApplication.CreateBuilder(args);

// setting up the database
builder.Services.AddDbContext<StoreDb>(options =>
    options.UseSqlite("Data Source=store.db"));

// enabling CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy => 
        policy.WithOrigins("http://localhost:5173") // Verify this is your React Port!
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

//API ENDPOINTS (Routes)

// GET (getting a new product)
app.MapGet("/api/products", async (StoreDb db) => 
    await db.Products.ToListAsync());

// POST (adding a new product)
app.MapPost("/api/products", async (StoreDb db, Product product) =>
{
    db.Products.Add(product);
    await db.SaveChangesAsync();
    return Results.Created($"/api/products/{product.Id}", product);
});

// DELETE (removing product)
app.MapDelete("/api/products/{id}", async (StoreDb db, int id) =>
{
    var product = await db.Products.FindAsync(id);
    if (product is null) return Results.NotFound();

    db.Products.Remove(product);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

// Running app
app.Run();

//DATABASE CONTEXT (bridge sqlite)
class StoreDb : DbContext
{
    public StoreDb(DbContextOptions<StoreDb> options) : base(options) { }
    public DbSet<Product> Products => Set<Product>();
}
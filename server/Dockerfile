# build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /source
#  copying files and restoring packets
COPY . .
RUN dotnet restore
# publish app
RUN dotnet publish -c release -o /app
# run
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=build /app .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "DreamStore.API.dll"]
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 5000
EXPOSE 5001

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release

WORKDIR /src
COPY ["englishstorageapplication.client/nuget.config", "englishstorageapplication.client/"]
COPY ["EnglishStorageApplication.Server/EnglishStorageApplication.Server.csproj", "EnglishStorageApplication.Server/"]
COPY ["EnglishApp.Application/EnglishApp.Application.csproj", "EnglishApp.Application/"]
COPY ["EnglishApp.Core/EnglishApp.Core.csproj", "EnglishApp.Core/"]
COPY ["EnglishApp.DataAccess/EnglishApp.DataAccess.csproj", "EnglishApp.DataAccess/"]
COPY ["englishstorageapplication.client/App.client.esproj", "englishstorageapplication.client/"]
RUN dotnet restore "./EnglishStorageApplication.Server/EnglishStorageApplication.Server.csproj"
COPY . .
WORKDIR "/src/EnglishStorageApplication.Server"
RUN dotnet build "./EnglishStorageApplication.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./EnglishStorageApplication.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "EnglishStorageApplication.Server.dll"]

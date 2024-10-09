
// Controllers: Содержит контроллеры, которые обрабатывают HTTP-запросы и возвращают ответы.
// Models: Содержит модели данных, которые представляют сущности базы данных.
// Data: Содержит контекст базы данных и миграции.
// Services: Содержит бизнес-логику приложения. Здесь можно определить интерфейсы и их реализации для различных сервисов.
// Repositories: Содержит репозитории для доступа к данным. Это помогает отделить логику доступа к данным от бизнес-логики.
// DTOs: Содержит объекты передачи данных (Data Transfer Objects), которые используются для передачи данных между слоями приложения.
// Helpers: Содержит вспомогательные классы и утилиты, такие как генерация JWT токенов или отправка email.

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

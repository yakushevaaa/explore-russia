namespace ExploreRussiaApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.MapGet("/events", () => new List<Event>
            {
                new Event
                {
                    Id = 1,
                    Name = "БАЙКАЛ — ЖЕМЧУЖИНА СИБИРИ",
                    Description = "Глубочайшее озеро мира с кристально чистой водой," +
                                  " окружённое тайгой и горами. Отправьтесь в путешествие по Байкалу " +
                                  "— катайтесь на льдинах зимой, исследуйте заповедные тропы летом.",
                },
                new Event
                {
                    Id = 2,
                    Name = "МОСКВА — СЕРДЦЕ РОССИИ",
                    Description = "Современный мегаполис с многовековой историей. " +
                                  "Прогуляйтесь по Красной площади, поднимитесь на смотровую площадку Москва-Сити" +
                                  " и посетите лучшие театры.",
                },
                new Event
                {
                    Id = 3,
                    Name = "САНКТ-ПЕТЕРБУРГ — ВЕНЕЦ СЕВЕРА",
                    Description =
                        "Императорский город на Неве с великолепной архитектурой и богатой культурной жизнью. " +
                        "Посетите Эрмитаж, прогуляйтесь по Невскому проспекту и насладитесь белыми ночами летом.",
                }
            });

            app.UseHttpsRedirection();
            app.UseAuthorization();

            app.Run();
        }
    }

    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }
}
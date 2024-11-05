namespace EnglishApp.Infrastructure
{
    public class JwtOptions
    {
        public string SectretKey { get; set; } = string.Empty;
        public int ExpitesHours {  get; set; }
    }
}

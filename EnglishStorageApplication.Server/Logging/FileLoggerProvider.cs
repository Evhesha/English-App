namespace EnglishStorageApplication.Server.Logging
{
    public class FileLoggerProvider : ILoggerProvider
    {
        string path;
        public FileLoggerProvider(string path)
        {
            this.path = path;

            if(File.Exists(path))
            {
                File.WriteAllText(path, string.Empty);
            }
        }
        public ILogger CreateLogger(string categoryName)
        {
            return new FileLogger(path);
        }

        public void Dispose() { }
    }
}

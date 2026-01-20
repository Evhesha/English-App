using System.Text.Json.Serialization;

namespace EnglishApp.Core.Params.LessonParams;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum SortDirection
{
    Ascending,
    Descending
}
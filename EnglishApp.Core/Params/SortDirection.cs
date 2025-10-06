using System.Text.Json.Serialization;

namespace EnglishApp.Core.Params;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum SortDirection
{
    Ascending,
    Descending
}
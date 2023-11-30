using System.Text.Json;
using System.Text.Json.Nodes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;

namespace DziennikReact.Controllers;

[ApiController]
[Route("[controller]")]
public class DodajController
{
    [HttpPut]
    public IActionResult Index(string json)
    {
        var jsonNode = JsonSerializer.SerializeToNode(json);
        if (jsonNode == null)
        {
            return new BadRequestResult();
        }

        var jsonObject = jsonNode.AsObject();
        JsonNode? type;
        jsonObject.TryGetPropertyValue("Type", out type);

        if (type?.ToString() == "uczen")
        {
            return PutUczen(jsonObject);
        }
        else if (type?.ToString() == "nauczyciel")
        {
            
        }
        else if (type?.ToString() == "klasa")
        {
            
        }
        else if (type?.ToString() == "szkola")
        {
            
        }

        return new BadRequestResult();
    }

    private IActionResult PutUczen(JsonObject uczen)
    {
        try
        {
            using (var connection = new SqliteConnection("Data source=SqlLiteDB.db"))
            {
                connection.Open();
                var command = connection.CreateCommand();
                JsonNode imie, nazwisko, plec, punkty, klasa;
                
                uczen.TryGetPropertyValue("Imie", out imie);
                uczen.TryGetPropertyValue("Nazwisko", out nazwisko);
                uczen.TryGetPropertyValue("Plec", out plec);
                uczen.TryGetPropertyValue("Punkty", out punkty);
                uczen.TryGetPropertyValue("Klasa", out klasa);

                command.CommandText = $"INSERT INTO Uczen VALUES (" +
                                      $"{imie.ToString()}," +
                                      $"{nazwisko.ToString()}," +
                                      $"NULL," +
                                      $"{plec.ToString()}," +
                                      $"{punkty.ToString()}," +
                                      $"{klasa.ToString()}" +
                                      $")";
                
                // TODO: Dokończyć tutaj
            }
        }
        catch (Exception e)
        {
            return new BadRequestObjectResult(e.Message);
        }
    }
}
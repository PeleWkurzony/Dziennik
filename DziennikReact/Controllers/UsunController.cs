using System.Xml.XPath;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;

namespace DziennikReact.Controllers;

[ApiController]
[Route("[controller]")]
public class UsunController
{
    [HttpDelete]
    public IActionResult Index(string type, int id)
    {
        try
        {
            using (var connection = new SqliteConnection("Data source=SqlLiteDB.db"))
            {
                connection.Open();
                var command = connection.CreateCommand();

                command.CommandText = $"DELETE FROM {type} WHERE id = {id}";
                
                command.ExecuteNonQuery();
            }

            return new RedirectResult("/");
        }
        catch (Exception e)
        {
            return new BadRequestObjectResult(e.Message);
        }
    }
}
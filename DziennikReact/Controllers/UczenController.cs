using System;
using System.Text.Json;
using DziennikReact.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.Extensions.Logging;

namespace DziennikReact.Controllers {
    
    [ApiController]
    [Route("[controller]")]
    public class UczenController : ControllerBase {

        [HttpGet]
        public string Index(int id) {
            try {
                string text = "";
                Uczen uczen = new Uczen();
                using (var connection = new SqliteConnection("Data source=SqlLiteDB.db")) {
                    connection.Open();

                    var command = connection.CreateCommand();
                    command.CommandText =
                        "SELECT * FROM uczen WHERE Id = $id";

                    command.Parameters.AddWithValue("$id", id);

                    using (var reader = command.ExecuteReader()) {
                        while (reader.Read()) {
                            uczen = new Uczen() {
                                Imie = reader.GetString(0),
                                Nazwsisko = reader.GetString(1),
                                Id = reader.GetInt32(0),
                                Plec = Plec.Inne,
                                Punkty = reader.GetInt32(1),
                            };
                            var sex = reader.GetString(2);
                            if (sex == "Mezczyzna") uczen.Plec = Plec.Mezczyzna;
                            else if (sex == "Kobieta") uczen.Plec = Plec.Kobieta;

                        }
                    }
                }
                
                return JsonSerializer.Serialize(uczen);
            }
            catch (Exception e) {
                return e.Message;
            }
            
            
        }
        
    }
}
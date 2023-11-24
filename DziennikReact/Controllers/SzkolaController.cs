using System;
using System.Collections.Generic;
using System.Text.Json;
using DziennikReact.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;

namespace DziennikReact.Controllers {
    
    [ApiController]
    [Route("[controller]")]
    public class SzkolaController : ControllerBase {

        [HttpGet]
        public string Index(Int32? id) {
            try {
                using (var connection = new SqliteConnection("Data source=SqlLiteDB.db")) {
                    connection.Open();
                    var szkolas = new List<Szkola>();
                    
                    var command = connection.CreateCommand();
                    if (id == null) {
                        command.CommandText = "SELECT * FROM Szkola";
                    }
                    else {
                        command.CommandText = "SELECT * FROM Szkola WHERE Id = $id";
                        command.Parameters.AddWithValue("$id", id);
                    }

                    using (var reader = command.ExecuteReader()) {
                        while (reader.Read()) {
                            var szkola = new Szkola() {
                                Id = reader.GetInt32(0),
                                Nazwa = reader.GetString(1),
                                ListaKlas = null
                            };
                            
                            szkolas.Add(szkola);
                        }
                    }
                    
                    
                    szkolas.ForEach((szkola) => {
                        szkola.ListaKlas = GetKlasesList(szkola.Id);
                    });
                    
                    return JsonSerializer.Serialize(szkolas);
                }
            }
            catch (Exception e) {
                return e.Message;
            }
        }

        private List<Klasa> GetKlasesList(Int32 id) {
            using (var connection = new SqliteConnection("Data source=SqlLiteDB.db")) {
                connection.Open();
                var klases = new List<Klasa>();
                var command = connection.CreateCommand();
                command.CommandText = "SELECT id FROM Klasa WHERE Szkola = $id";
                command.Parameters.AddWithValue("$id", id);

                using (var reader = command.ExecuteReader()) {
                    while (reader.Read()) {
                        klases.Add(KlasaController.GetKlases(reader.GetInt32(0))[0]);
                    }
                }

                return klases;
            }
        }
        
    }
}
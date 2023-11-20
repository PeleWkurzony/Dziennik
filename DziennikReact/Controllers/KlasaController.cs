using System;
using System.Collections.Generic;
using System.Text.Json;
using DziennikReact.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;

namespace DziennikReact.Controllers {
    
    [ApiController]
    [Route("[controller]")]
    public class KlasaController : ControllerBase {

        [HttpGet]
        public string Index(Int32? id) {
            try {
                return JsonSerializer.Serialize(GetKlases(id));
            }
            catch (Exception e) {
                return e.Message;
            }
        }

        public static List<Klasa> GetKlases(Int32? id) {
            using (var connection = new SqliteConnection("Data source=SqlLiteDB.db")) {
                List<Klasa> classes = new List<Klasa>();
                connection.Open();

                var command = connection.CreateCommand();

                if (id == null) {
                    command.CommandText = "SELECT * FROM Klasa";
                }
                else {
                    command.CommandText = "SELECT * FROM Klasa WHERE id = $id";
                    command.Parameters.AddWithValue("$id", id);
                }

                using (var reader = command.ExecuteReader()) {
                    while (reader.Read()) {
                        var classObj = new Klasa() {
                            Id = reader.GetInt32(0),
                            ListaUczniow = null,
                            Nazwa = reader.GetString(1),
                            Wychowawca = NauczycielController.GetNauczyciels(reader.GetInt32(2))[0],
                        };
                            
                        classes.Add(classObj);
                    }
                }
                    
                classes.ForEach((classObj) => {
                    classObj.ListaUczniow = GetUczensList(classObj.Id);
                });

                return classes;
            }
        }
        
        private static List<Uczen> GetUczensList(int classId) {
            using (var connection = new SqliteConnection("Data source=SqlLiteDB.db")) {
                var uczensList = new List<Uczen>();
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = "SELECT id FROM Uczen WHERE Klasa = $id";
                command.Parameters.AddWithValue("$id", classId);

                using (var reader = command.ExecuteReader()) {
                    while (reader.Read()) {
                        uczensList.Add(UczenController.GetUczens(reader.GetInt32(0))[0]);
                    }
                }

                return uczensList;
            }
        }
    }
}
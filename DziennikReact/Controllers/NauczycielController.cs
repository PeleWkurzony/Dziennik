using System;
using System.Collections.Generic;
using System.Text.Json;
using DziennikReact.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;

namespace DziennikReact.Controllers {
    
    [ApiController]
    [Route("[controller]")]
    public class NauczycielController  : ControllerBase {

        [HttpGet]
        public string Index(Int32? id) {
            try {
                return JsonSerializer.Serialize(
                    GetNauczyciels(id)
                );
            }
            catch (Exception e) {
                return e.Message;
            }
            
        }

        public static List<Nauczyciel> GetNauczyciels(Int32? id) {
            using (var connection = new SqliteConnection("Data source=SqlLiteDB.db")) {
                List<Nauczyciel> teachers = new List<Nauczyciel>();
                    
                connection.Open();
                var command = connection.CreateCommand();

                if (id == null) {
                    command.CommandText = "SELECT * FROM Nauczyciel";
                }
                else {
                    command.CommandText =
                        "SELECT * FROM Nauczyciel WHERE Id = $id";
                    command.Parameters.AddWithValue("$id", id);
                }
                    
                using (var reader = command.ExecuteReader()) {

                    while (reader.Read()) {
                        var teacher = new Nauczyciel() {
                            Id = reader.GetInt32(2),
                            Imie = reader.GetString(0),
                            Nazwisko = reader.GetString(1),
                            Przedmiot = reader.GetString(3)
                        };
                        teachers.Add(teacher);
                    }
                }

                return teachers;
            }
        }
        
    }
}
using System;
using System.Collections.Generic;
using System.Text.Json;
using DziennikReact.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;

namespace DziennikReact.Controllers {
    
    [ApiController]
    [Route("[controller]")]
    public class UczenController : ControllerBase {

        [HttpGet]
        public string Index(Int32? id) {
            try {
                return JsonSerializer.Serialize(GetUczens(id));
            }
            catch (Exception e) {
                return e.Message;
            }
        }

        public static List<Uczen> GetUczens(Int32? id) {
            using (var connection = new SqliteConnection("Data source=SqlLiteDB.db")) {
                List<Uczen> students = new List<Uczen>();
                connection.Open();

                var command = connection.CreateCommand();

                if (id == null) {
                    command.CommandText = "SELECT * FROM uczen";
                }
                else {
                    command.CommandText =
                        "SELECT * FROM uczen WHERE Id = $id";
                    command.Parameters.AddWithValue("$id", id);
                }
                    
                using (var reader = command.ExecuteReader()) {
                    while (reader.Read()) {
                        var student = new Uczen() {
                            Imie = reader.GetString(0),
                            Nazwisko = reader.GetString(1),
                            Id = reader.GetInt32(2),
                            Plec = Plec.Inne,
                            Punkty = reader.GetInt32(4),
                        };
                        var sex = reader.GetString(3);
                        if (sex == "Mezczyzna") student.Plec = Plec.Mezczyzna;
                        else if (sex == "Kobieta") student.Plec = Plec.Kobieta;
                            
                        students.Add(student);
                    }
                }

                return students;
            }
        }
        
    }
}
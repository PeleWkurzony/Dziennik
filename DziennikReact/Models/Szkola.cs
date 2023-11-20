using System.Collections.Generic;

namespace DziennikReact.Models {
    public struct Szkola {
        public int Id { get; set; }
        public string Nazwa { get; set; }
        public List<Klasa>? ListaKlas { get; set; } 
    }
}
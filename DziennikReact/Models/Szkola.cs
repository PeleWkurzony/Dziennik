using System.Collections.Generic;

namespace DziennikReact.Models {
    public class Szkola {
        public int Id { get; set; }
        public string Nazwa { get; set; }
        public List<Klasa>? ListaKlas { get; set; } 
        
        public double SredniaPunktow {
            get {
                if (ListaKlas == null || ListaKlas.Count == 0) return 0;
                double pkt = 0; 
                foreach (var klasa in ListaKlas) {
                    pkt += klasa.SredniaPunktow;
                }

                return  pkt / ListaKlas.Count;
            }
        }
        public string Type {
            get => "szkola";
        }
    }
}
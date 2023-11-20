using System.Collections.Generic;

namespace DziennikReact.Models {
    public class Klasa {
        public int Id { get; set; }
        public string Nazwa { get; set; }
        public List<Uczen>?  ListaUczniow { get; set; }
        public Nauczyciel Wychowawca { get; set; }

        public double SredniaPunktow {
            get {
                if (ListaUczniow == null) return 0;
                int pkt = 0; 
                foreach (var uczen in ListaUczniow) {
                    pkt += uczen.Punkty;
                }

                return (double) pkt / ListaUczniow.Count;
            }
        }
    }
}
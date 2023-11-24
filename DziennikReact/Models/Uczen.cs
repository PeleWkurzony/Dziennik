namespace DziennikReact.Models {

    public enum Plec {
        Mezczyzna,
        Kobieta,
        Inne
    }
    
    public class Uczen {
        public string Imie { get; set; }
        public string Nazwisko { get; set; }
        public int Id { get; set; }
        public Plec Plec { get; set; } 
        public int Punkty { get; set; }
        public string Type {
            get => "uczen";
        }
    }
}
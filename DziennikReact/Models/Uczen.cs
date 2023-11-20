namespace DziennikReact.Models {

    public enum Plec {
        Mezczyzna,
        Kobieta,
        Inne
    }
    
    public struct Uczen {
        public string Imie { get; set; }
        public string Nazwsisko { get; set; }
        public int Id { get; set; }
        public Plec Plec { get; set; } 
        public int Punkty { get; set; }
    }
}
namespace DziennikReact.Models {
    public class Nauczyciel {
        public string Imie { get; set; }
        public string Nazwisko { get; set; }
        public int Id { get; set; }
        public string Przedmiot { get; set; }
        public string Type {
            get => "nauczyciel";
        }
    }
}
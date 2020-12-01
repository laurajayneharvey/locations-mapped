namespace LocationsMapped.Models
{
    public class LocationDatabaseSettings : ILocationDatabaseSettings
    {
        public string LocationsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public int Take { get; set; }
    }

    public interface ILocationDatabaseSettings
    {
        string LocationsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
        int Take { get; set; }
    }
}


using LocationsMapped.Models;
using MongoDB.Driver;
using System.Linq;

namespace LocationsMapped.Services
{
    public class LocationService
    {
        private readonly int _take;
        private readonly IMongoCollection<Location> _locations;

        public LocationService(ILocationDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _take = settings.Take;
            _locations = database.GetCollection<Location>(settings.LocationsCollectionName);
        }

        public LocationResponse Get()
        {
            var locations = _locations.Find(location => true).ToList();

            return new LocationResponse
            {
                Take = _take,
                Locations = locations
            };
        }
    }
}
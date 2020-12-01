using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LocationsMapped.Models
{
    public class Location
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("_id")]
        public string ObjectId { get; set; }

        [BsonElement("id")]
        public string Id { get; set; }

        [BsonElement("latitude")]
        public string Latitude { get; set; }

        [BsonElement("longitude")]
        public string Longitude { get; set; }

        [BsonElement("postcode")]
        public string Postcode { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }
    }
}
using System.Collections.Generic;

namespace LocationsMapped.Models
{
    public class LocationResponse
    {
        public int Take { get; set; }
        public List<Location> Locations { get; set; }
    }
}
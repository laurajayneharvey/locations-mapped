using LocationsMapped.Models;
using LocationsMapped.Services;
using Microsoft.AspNetCore.Mvc;

namespace LocationsMapped.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocationController : ControllerBase
    {
        private readonly LocationService _locationService;

        public LocationController(LocationService locationService)
        {
            _locationService = locationService;
        }

        [HttpGet]
        public ActionResult<LocationResponse> Get() => _locationService.Get();
    }
}

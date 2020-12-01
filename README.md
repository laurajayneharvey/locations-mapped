## Notes

- Wouldn't ordinarily check in credentials but have done so here to satisfy the Test Condition "The final solution should be executable from just opening the solution and running it", the credentials will be deleted in 14 days
- Made decision not to demonstrate testing given the time constraint
- "Take" in appsettings.json is the configurable take-N-number-values-from-the-collection value
- Specification was for the data list to be to the side of the map but this will not be usuable on smaller devices, so it will flex under the map for <= 1024px

## Future improvements

- Centre the map (would use a library to get the center of the set of coordinates)
- Treatment for bad data - entry with id 2638844 has a Bristol postcode but coordinates place it off the east coast of Africa
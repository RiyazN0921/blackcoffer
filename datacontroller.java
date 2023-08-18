@RestController
@RequestMapping("/api/data")
public class DataController {

    @Autowired
    private DataService dataService;

    @GetMapping
    public List<DataEntity> getData(
            @RequestParam(required = false) Integer endYear,
            @RequestParam(required = false) String topic
    ) {
        return dataService.getFilteredData(endYear, topic);
    }
}

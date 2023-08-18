@Service
public class DataService {

    @Autowired
    private DataRepository dataRepository;

    public List<DataEntity> getFilteredData(Integer endYear, String topic) {
        if (endYear != null && topic != null) {
            return dataRepository.findByEndYearAndTopic(endYear, topic);
        } else if (endYear != null) {
            return dataRepository.findByEndYear(endYear);
        } else if (topic != null) {
            return dataRepository.findByTopic(topic);
        } else {
            return dataRepository.findAll();
        }
    }
}

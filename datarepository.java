@Repository
public interface DataRepository extends JpaRepository<DataEntity, Long> {

    List<DataEntity> findByEndYear(Integer endYear);
    List<DataEntity> findByTopic(String topic);
}

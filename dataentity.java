@Entity
@Table(name = "data")
public class DataEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer endYear;
    private String city;
    private Double cityLat;
    private Double intensity;
    private String sector;
    private String topic;
   
}

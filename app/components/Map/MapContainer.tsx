import styles from './styles.module.css';
import Map from './Map'

const MapContainer = (data: any) => {
    if (!data) {
        return <div/>
    }
    return (
        <div className={styles.mapContainer}>
            <Map />
        </div>
    )
};

export default MapContainer;
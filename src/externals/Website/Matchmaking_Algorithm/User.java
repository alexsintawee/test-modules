public class User {
    public String username;
    public double latitude;
    public double longitude;

    public User(String username, double latitude, double longitude) {
        this.username = username;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public String getUsername() {
        return username; 
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }
}

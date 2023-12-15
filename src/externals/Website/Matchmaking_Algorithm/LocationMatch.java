import java.util.ArrayList;
import java.util.List;

public class LocationMatch {
    public List<User> findNearbyUsers(User currentUser, List<User> allUsers, double maxDistance) {
        List<User> nearbyUsers = new ArrayList<>();

        for (User user : allUsers) {
            if (!user.equals(currentUser)) { // Exclude the current user
                double distance = calculateDistance(currentUser, user);
                if (distance <= maxDistance) {
                    nearbyUsers.add(user);
                }
            }
        }

        return nearbyUsers;
    }

    private double calculateDistance(User user1, User user2) {
        double earthRadius = 6371; // Earth's radius in kilometers

        double lat1 = Math.toRadians(user1.getLatitude());
        double lon1 = Math.toRadians(user1.getLongitude());
        double lat2 = Math.toRadians(user2.getLatitude());
        double lon2 = Math.toRadians(user2.getLongitude());

        double dLat = lat2 - lat1;
        double dLon = lon2 - lon1;

        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1) * Math.cos(lat2) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c; // The distance in kilometers
    }

    public static void main(String[] args) {
        List<User> allUsers = new ArrayList<>();
        allUsers.add(new User("User1", 40.7128, -74.0060)); // Example user 1 in New York
        allUsers.add(new User("User2", 34.0522, -118.2437)); // Example user 2 in Los Angeles

        User currentUser = new User("CurrentUser", 51.5074, -0.1278); // Example current user in London

        LocationMatch locationMatcher = new LocationMatch();
        List<User> nearbyUsers = locationMatcher.findNearbyUsers(currentUser, allUsers, 1000); // Max distance in kilometers

        for (User nearbyUser : nearbyUsers) {
            System.out.println("Nearby User: " + nearbyUser.getUsername());
        }
    }
}

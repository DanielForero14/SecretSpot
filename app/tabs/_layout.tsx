import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#A259FF', // tu morado
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#0D0D0D', // fondo oscuro
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = 'help';

          switch (route.name) {
            case 'home':
              iconName = 'home-outline';
              break;
            case 'explore':
              iconName = 'compass-outline';
              break;
            case 'create-event':
              iconName = 'add-circle-outline';
              break;
            case 'notifications':
              iconName = 'notifications-outline';
              break;
            case 'profile':
              iconName = 'person-outline';
              break;
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="create-event" options={{ title: "Create" }} />
      <Tabs.Screen name="notifications" options={{ title: "Alerts" }} />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

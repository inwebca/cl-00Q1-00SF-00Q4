import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

//   const getUserRole = async () => {
//     try {
//       // Étape 1 : Obtenez l'utilisateur connecté
//       const {
//         data: { user },
//         error: authError,
//       } = await supabase.auth.getUser();

//       if (authError || !user) {
//         console.error(
//           "Erreur lors de la récupération de l’utilisateur connecté :",
//           authError?.message
//         );
//         return null;
//       }

//       // Étape 2 : Interrogez la table `user_roles` pour récupérer le rôle
//       const { data, error } = await supabase
//         .from("user_roles")
//         .select("role_id (name)")
//         .eq("user_id", user.id)
//         .single(); // Récupère une seule ligne

//       if (error) {
//         console.error(
//           "Erreur lors de la récupération du rôle de l’utilisateur :",
//           error.message
//         );
//         return null;
//       }

//       // Étape 3 : Retourner le nom du rôle
//       const role = data?.role_id?.name;
//       console.log("Rôle de l’utilisateur connecté :", role);

//       return role;
//     } catch (err) {
//       console.error("Erreur inattendue :", err.message);
//       return null;
//     }
//   };

//   const signInUser = async () => {
//     const {
//       data: { user },
//       error: authError,
//     } = await supabase.auth.signInWithPassword({
//       email: "admin@admin.com",
//       password: "123456",
//     });
//   };

//   return (
//     <>
//       {JSON.stringify(todos)}
//       <button onClick={getUserRole}>user role</button>
//       <button onClick={signInUser}>SigninUser</button>
//     </>
//   );
// }

export default App;

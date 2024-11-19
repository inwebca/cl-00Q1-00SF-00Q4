import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";
import "./App.css";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
      />
    );
  } else {
    return (
      <div>
        <button onClick={handleSignOut}>Sign out</button>
        Logged in!
      </div>
    );
  }

  const getUserRole = async () => {
    try {
      // Étape 1 : Obtenez l'utilisateur connecté
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        console.error(
          "Erreur lors de la récupération de l’utilisateur connecté :",
          authError?.message
        );
        return null;
      }

      // Étape 2 : Interrogez la table `user_roles` pour récupérer le rôle
      const { data, error } = await supabase
        .from("user_roles")
        .select("role_id (name)")
        .eq("user_id", user.id)
        .single(); // Récupère une seule ligne

      if (error) {
        console.error(
          "Erreur lors de la récupération du rôle de l’utilisateur :",
          error.message
        );
        return null;
      }

      // Étape 3 : Retourner le nom du rôle
      const role = data?.role_id?.name;
      console.log("Rôle de l’utilisateur connecté :", role);

      return role;
    } catch (err) {
      console.error("Erreur inattendue :", err.message);
      return null;
    }
  };

  const signInUser = async () => {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.signInWithPassword({
      email: "admin@admin.com",
      password: "123456",
    });
  };

  return (
    <>
      {JSON.stringify(todos)}
      <button onClick={getUserRole}>user role</button>
      <button onClick={signInUser}>SigninUser</button>
    </>
  );
}

export default App;

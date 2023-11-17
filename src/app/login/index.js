import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { Session, useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const Home = () => {
    const session = useSession();
    const supabase = useSupabaseClient();

    return (
        <div className="container" style={{padding:"50px 0 100px 0"}}>
            {!session? (
                <Auth
                    providers={['google']}
                    supabaseClient={supabase}
                    appearance={{theme: ThemeSupa}}
                    theme="dark"
                />
            ) : (
                <p>Account page will go here.</p>
            )}
        </div>
    );
};

export default Home;
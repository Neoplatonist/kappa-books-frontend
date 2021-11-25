import Head from "next/head";
import Link from "next/link";
import { getProviders, getSession, signIn, signOut } from "next-auth/client";
import { Card, Col, Container, Row } from "react-bootstrap";

const signInButtonNode = (provider) => {
    const handleSignIn = (e) => {
        e.preventDefault();
        // signIn('google', { callbackUrl: '/dashboard' })
        console.log(provider.id);
        signIn(provider.id, {
            callbackUrl: `${window.location.origin}/dashboard`,
        });
    };

    return (
        <div key={provider.id}>
            <Link href="/api/auth/signin" passHref>
                <button onClick={handleSignIn}>Sign In with {provider.name}</button>
            </Link>
        </div>
    );
};

const signOutButtonNode = () => {
    const handleSignOut = (e) => {
        e.preventDefault();
        signOut({ callbackUrl: "/" });
    };

    return (
        <div>
            <Link href="/api/auth/signout" passHref>
                <button onClick={handleSignOut}>Sign Out</button>
            </Link>
        </div>
    );
};

const unauthorized = () => {
    return (
        <div className="text">You aren&apos;t authorized to view this page</div>
    );
};

const authorized = () => {
    return <div className="text">Hello world</div>;
};

const RegisterPage = ({ session, providers }) => {
    return (
        <Container fluid>
            <Head>
                <title>Register Page</title>
            </Head>

            {/* <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="navbar"
          >
            {session ? signOutButtonNode() : signInButtonNode()}
          </div>
        </Col>

        {session ? authorized() : unauthorized()}
      </Row> */}

            <Row>
                <Col
                    style={{ minHeight: "70vh" }}
                    md={{ span: 4, offset: 4 }}
                    className="d-flex align-items-center"
                >
                    <Card
                        style={{
                            width: "100%",
                            backgroundColor: "#A9B4C2",
                            border: "none",
                        }}
                    >
                        <Card.Body className="text-center">
                            <Card.Title>
                                <h1 style={{ color: "black" }}>Register</h1>
                            </Card.Title>

                            <br />

                            {session
                                ? signOutButtonNode()
                                : Object.values(providers).map((provider) =>
                                    signInButtonNode(provider)
                                )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    const providers = await getProviders();

    return {
        props: {
            session,
            providers,
        },
    };
};

export default RegisterPage;

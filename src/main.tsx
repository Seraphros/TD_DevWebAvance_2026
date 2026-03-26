import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {App} from "./App.tsx";
import {BrowserRouter} from "react-router-dom";
import {initializeApiClient} from "./api/ApiClient.ts";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

async function bootstrap() {
    const queryClient = new QueryClient();

    await initializeApiClient();
    console.log("API client initialized");

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </QueryClientProvider>
        </StrictMode>,
    )
}

await bootstrap();
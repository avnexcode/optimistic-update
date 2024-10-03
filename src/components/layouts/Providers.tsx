import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

type ProvidersProps = {
    children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)
export default Providers
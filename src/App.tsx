import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function App() {

  return (
    <div>
      <Tabs defaultValue="article" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="article">Get Artikl By Name</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="article">

  </TabsContent>
</Tabs>
    </div>
  )
}

export default App

import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GetArticleForm from './CustomComponents/GetArticleForm/GetArticleForm'


function App() {

  return (
    <div>
      <Tabs defaultValue="article">
      <TabsList>
        <TabsTrigger value="article">Traži artikle po imenu</TabsTrigger>
        <TabsTrigger value="payment">Traži obračune po načinu plaćanja</TabsTrigger>
      </TabsList>
      <TabsContent value="article">
        <GetArticleForm></GetArticleForm>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default App

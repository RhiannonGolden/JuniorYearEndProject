import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;

import java.net.InetSocketAddress;
import java.util.Map;

//For compiling on the shell on repl: Same on mac
//javac -cp sqlite-jdbc-3.23.1.jar: Main.java
//java -cp sqlite-jdbc-3.23.1.jar: Main

//Use for windows
//javac -cp sqlite-jdbc-3.23.1.jar; Main.java


public class Main {

    public static void main(String[] args) throws IOException 
  {
      System.out.println("Hello World");

    
      // create a port - our Gateway
      int port = 8500;

      //create the HTTPserver object
      HttpServer server = HttpServer.create(new InetSocketAddress(port),0);

      Database db = new Database("jdbc:sqlite:Project2.db");

      //create a route handler to repond the a request
      // this is our default route
      server.createContext("/", new RouteHandler("Default route handler. No route specified.....") );


      String sql1 = "select * from Customers";
      server.createContext("/Customers", new RouteHandler(db,sql1) );

      
      String sql2 = "select * from Clothing";
      server.createContext("/Clothing", new RouteHandler(db,sql2) );

      
      String sql3 = "select Orders.OrderID, Orders.DateOrdered, Orders.ItemID, Orders.CustomerID, Customers.FirstName, Customers.LastName, Customers.Country, Customers.Address from Orders";
      sql3 += " Inner Join Customers ON Customers.CustomerID=Orders.CustomerID ";
      server.createContext("/Orders", new RouteHandler(db,sql3) );
      
      

      
      //Start the server
      server.start();
      System.out.println("Server is listening on port "+port);

    }    
}
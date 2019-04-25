import java.util.ArrayList;

public class Generator {
    public static void main(String[] args) {


        ArrayList colors = new ArrayList();
        ArrayList listOfModels = new ArrayList();
        String title = "MOTTO - Wrzesień 2018";
        String catalog = "motto-wrzesien/";
        String sh = "MT";

        colors.add("C1");
        colors.add("C2");
        colors.add("C3");
        colors.add("C4");
        colors.add("C5");
        colors.add("C6");

        listOfModels.add("540");
        listOfModels.add("541");
        listOfModels.add("542");
        listOfModels.add("543");
        listOfModels.add("548");
        listOfModels.add("549");
        listOfModels.add("550");
        listOfModels.add("551");
        listOfModels.add("552");
        listOfModels.add("553");
        listOfModels.add("554");
        listOfModels.add("555");
        listOfModels.add("556");
        listOfModels.add("557");
        listOfModels.add("558");
        generateJSON(listOfModels, colors, catalog, sh, title);
    }

    public static String getPath(String catalog, String sufix, String sh, String model, String color){
        return "\"./content/Models/"+catalog+ sh+" "+ model+" "+ color+"/"+ sh+" "+ model+" "+ color+sufix+"\"";
    }

    public static void generateJSON(ArrayList models, ArrayList colors, String catalog, String sh,String title) {
        String qM = ("\"");
        System.out.println("[");
        System.out.println(qM+title+qM+",");
        for (int i = 0; i < models.size(); i++) {
            System.out.println("[");

            System.out.println(qM+(models.get(i))+qM+",");
            System.out.println("[");
            for (int j = 0; j < colors.size(); j++) {
                System.out.println("{");

                System.out.println("\"color\": "+ qM+ colors.get(j)+ qM+",");
                System.out.println("\"img1\": "+ getPath(catalog,"_2D_0001.jpg",sh, models.get(i).toString(), colors.get(j).toString())+",");
                System.out.println("\"img2\": "+ getPath(catalog,"_2D_0002.jpg",sh, models.get(i).toString(), colors.get(j).toString())+",");
                System.out.println("\"img3\": "+ getPath(catalog,"_2D_0003.jpg",sh, models.get(i).toString(), colors.get(j).toString()));

                System.out.println("}"+(j+1 == colors.size() ? "":","));
            }
            System.out.println("]");
            System.out.println("]"+(i+1 == models.size() ? "":","));
        }

        System.out.println("]");
    }

}



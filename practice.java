import java.util.List;
import java.util.Scanner;
import java.util.*;

class practice {

    public static void main(String[] args) {
        HashMap<Integer, Integer> h1 = new HashMap<>();
        int[] arr = { 0, 0, 0, 0, 0, 0, 1, 1, 1 };
        for (int i : arr) {
            if (h1.containsKey(i)) {
                h1.put(i, h1.get(i) + 1);
            } else {
                h1.put(i, 1);
            }

        }
        int ans = 0;
        for (int i : h1.keySet()) {
            if (h1.get(i) % 2 != 0) {
                ans = ans + (h1.get(i) - 1) / 2;
            } else {
                ans = ans + h1.get(i) / 2;
            }

        }
        System.out.println("the no of pairs" + ans);

    }

}
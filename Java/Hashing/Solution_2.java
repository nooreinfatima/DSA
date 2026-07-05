// Print only the elements whose frequency is greater than 1.

import java.util.*;

class Solution_2 {

    public static void main(String[] args) {

        int[] arr = {1,2,2,3,4,5,1,2};

        HashMap<Integer, Integer> map = new HashMap<>();

        // Count frequency
        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        // Print elements whose frequency > 1
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {

            if (entry.getValue() > 1) {

                System.out.println(entry.getKey() + " -> " + entry.getValue());

            }

        }
    }
}
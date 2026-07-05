//Find the First Repeating Element

import java.util.*;

class Solution_5 {

    public static void main(String[] args) {

        int[] arr = {1,2,3,4,2,5,1};

        HashSet<Integer> set = new HashSet<>();

        for (int num : arr) {

            if (set.contains(num)) {
                System.out.println("First Repeating Element = " + num);
                return;
            }

            set.add(num);
        }

        System.out.println("No Repeating Element");
    }
}
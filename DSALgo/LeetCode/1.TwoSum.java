package DSALgo.LeetCode;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int temp1 =0, temp2 = 0;
        for (int i = 0; i<nums.length; i++){
            for(int j = i+1; j < nums.length; j++){
                if (nums[i] + nums[j] == target){
                    temp1 = i;
                    temp2 = j;
                    break;
                }
            }
        }
        int[] solution = new int[]{temp1, temp2};
        return solution;
    }


    public static void main(String[] args){
        Solution solution = new Solution();

        int[] nums = {2, 5, 7, 8, 9};
        int target = 13;

        int[] solArr = solution.twoSum(nums, target);
        System.out.println(solArr[0] + "," +  solArr[1]);

    }
}




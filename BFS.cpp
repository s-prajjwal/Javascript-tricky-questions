#include <stdio.h>
#include <iostream>
#include <vector>
using namespace std;



int main() {
    vector<int> arr = {1,2,3,4,5,6,7};
    for(int i=0;i<arr.size();i++) {
        std::cout << arr[i];
    }
    return 0;
}
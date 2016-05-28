#include <iostream>
#include <vector>
using namespace std;

void print(const vector<int>& vec) {
  vector<int>::const_iterator it = vec.begin();
  while(it < (vec.end() - 1)) {
    cout << *it << ',';
    advance(it, 1);
  }
  cout << *(vec.end() - 1) << endl;
}


class PermutationGenerator {
  int size;
  vector<int> base;

  void swap(vector<int>::iterator i1, vector<int>::iterator i2) {
    int temp = *i1;
    *i1 = *i2;
    *i2 = temp;
  }

public:
  PermutationGenerator(int n) {
    size = n;
  }

  vector<int> operator() () {

    if (base.size() == 0) {
      for (int s = 0; s < size; s++) {
        // go from 1 to n, rather than 0 to n - 1
        base.push_back(s + 1); 
      }
      return base;
    }

    vector<int>::iterator decrease_itr = base.end() - 2; // Start with the next to last
    while (decrease_itr >= base.begin() && *decrease_itr > *(decrease_itr + 1)) { 
      // Ruh-roh, permutations exhausted
      if (decrease_itr == base.begin()) {
        return vector<int> {};
      }
      decrease_itr--;
    }

    vector<int>::iterator next_larger_itr = base.end() - 1;
    while (*next_larger_itr < *decrease_itr) {
      next_larger_itr--; 
    }
 
    swap(decrease_itr, next_larger_itr);
    
    // reverse the numbers in the suffix
    vector<int>::iterator right = base.end() - 1;
    vector<int>::iterator left = decrease_itr + 1;
    while (right > left) {
      swap(right, left);
      right--;
      left++; 
    }

    return base;
  }
};

int factorial(int n)
{
  return (n == 1 || n == 0) ? 1 : factorial(n - 1) * n;
}

int main() {
  int n;
  while (true) {
    cout << endl << "Choose an N: ";
    cin >> n;
    cout << endl;
    int nfac = factorial(n);
    cout << nfac << " permutations expected." << endl;
    PermutationGenerator p { n };
    int count = 0;
    while (true) {
      vector<int> result = p();
      if (result.empty()) {
        break;
      }
      print(result);
      count++;
    }
    cout << count << " permutations generated." << endl;
  }
}


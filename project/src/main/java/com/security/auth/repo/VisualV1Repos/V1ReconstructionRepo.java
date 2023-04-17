package com.security.auth.repo.VisualV1Repos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.security.auth.data.VisualV1.V1Reconstruction;

@Repository
public interface V1ReconstructionRepo extends JpaRepository<V1Reconstruction, Integer> {
    
}
